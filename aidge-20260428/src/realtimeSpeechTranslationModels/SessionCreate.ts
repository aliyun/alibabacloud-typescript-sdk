// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SessionCreateSession extends $dara.Model {
  mode?: string;
  /**
   * @remarks
   * 双向须提供本字段或根节点 language_pair；须包含 zh 和 en/ja/ko 之一。
   */
  languagePair?: string[];
  static names(): { [key: string]: string } {
    return {
      mode: 'mode',
      languagePair: 'language_pair',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      languagePair: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.languagePair)) {
      $dara.Model.validateArray(this.languagePair);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SessionCreate extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  type?: string;
  /**
   * @remarks
   * 可省略；提供时必须为非空、非纯空白字符串，用于关联响应。
   * 
   * @example
   * evt_create_1
   */
  eventId?: string;
  /**
   * @remarks
   * 与 session.mode 二选一；同时提供必须一致。均省略时后端选择 single，网关不补默认值。
   */
  mode?: string;
  /**
   * @remarks
   * 双向条件必填，与 session.language_pair 二选一；同时提供时内容及顺序必须一致。仅支持 zh 与 en/ja/ko 组合，顺序可反转，由后端校验。
   * 
   * @example
   * ["zh","en"]
   */
  languagePair?: string[];
  /**
   * @remarks
   * 单向可省略或指定 mode=single；双向须指定 bidirectional 模式及语言对。创建后模式与语言对不可变，音频和输出配置通过 SessionUpdate 下发。
   * 
   * @example
   * {"mode":"bidirectional","language_pair":["zh","en"]}
   */
  session?: SessionCreateSession;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      eventId: 'event_id',
      mode: 'mode',
      languagePair: 'language_pair',
      session: 'session',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      eventId: 'string',
      mode: 'string',
      languagePair: { 'type': 'array', 'itemType': 'string' },
      session: SessionCreateSession,
    };
  }

  validate() {
    if(Array.isArray(this.languagePair)) {
      $dara.Model.validateArray(this.languagePair);
    }
    if(this.session && typeof (this.session as any).validate === 'function') {
      (this.session as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

