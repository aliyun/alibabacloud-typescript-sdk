// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MergeRobotExtend extends $dara.Model {
  cardTemplate?: string;
  dailyNoc?: boolean;
  dailyNocTime?: string;
  dingSignKey?: string;
  enableOutgoing?: boolean;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      cardTemplate: 'cardTemplate',
      dailyNoc: 'dailyNoc',
      dailyNocTime: 'dailyNocTime',
      dingSignKey: 'dingSignKey',
      enableOutgoing: 'enableOutgoing',
      token: 'token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardTemplate: 'string',
      dailyNoc: 'boolean',
      dailyNocTime: 'string',
      dingSignKey: 'string',
      enableOutgoing: 'boolean',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeRobot extends $dara.Model {
  createTime?: string;
  extend?: MergeRobotExtend;
  gmtModified?: string;
  identifier?: string;
  lang?: string;
  name?: string;
  source?: string;
  type?: string;
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      extend: 'extend',
      gmtModified: 'gmtModified',
      identifier: 'identifier',
      lang: 'lang',
      name: 'name',
      source: 'source',
      type: 'type',
      webhook: 'webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      extend: MergeRobotExtend,
      gmtModified: 'string',
      identifier: 'string',
      lang: 'string',
      name: 'string',
      source: 'string',
      type: 'string',
      webhook: 'string',
    };
  }

  validate() {
    if(this.extend && typeof (this.extend as any).validate === 'function') {
      (this.extend as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

