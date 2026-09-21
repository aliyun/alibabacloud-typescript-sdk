// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishSkillVersionRequestBody extends $dara.Model {
  /**
   * @remarks
   * The commit message recorded on the official version produced by this publish operation. Takes effect in HEAD draft mode. If left empty, the draft message is used. Ignored in version Draft mode.
   * 
   * @example
   * First official version
   */
  commitMsg?: string;
  /**
   * @remarks
   * Specifies whether to update the latest label.
   * 
   * @example
   * true
   */
  updateLatestLabel?: boolean;
  static names(): { [key: string]: string } {
    return {
      commitMsg: 'commitMsg',
      updateLatestLabel: 'updateLatestLabel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commitMsg: 'string',
      updateLatestLabel: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishSkillVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   */
  body?: PublishSkillVersionRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: PublishSkillVersionRequestBody,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

