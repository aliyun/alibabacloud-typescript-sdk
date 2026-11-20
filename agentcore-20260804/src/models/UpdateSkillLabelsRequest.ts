// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSkillLabelsRequestBody extends $dara.Model {
  /**
   * @remarks
   * The label descriptions.
   * 
   * @example
   * {"stable":"prod environment usage"}
   */
  labelDescriptions?: string;
  /**
   * @remarks
   * The version label mapping JSON string.
   * 
   * This parameter is required.
   * 
   * @example
   * {"latest":"0.0.2","stable":"0.0.1"}
   */
  labels?: string;
  static names(): { [key: string]: string } {
    return {
      labelDescriptions: 'labelDescriptions',
      labels: 'labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelDescriptions: 'string',
      labels: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSkillLabelsRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   */
  body?: UpdateSkillLabelsRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UpdateSkillLabelsRequestBody,
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

