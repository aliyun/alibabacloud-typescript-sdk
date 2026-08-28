// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ForcePublishSkillVersionRequestBody extends $dara.Model {
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
      updateLatestLabel: 'updateLatestLabel',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ForcePublishSkillVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   */
  body?: ForcePublishSkillVersionRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: ForcePublishSkillVersionRequestBody,
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

