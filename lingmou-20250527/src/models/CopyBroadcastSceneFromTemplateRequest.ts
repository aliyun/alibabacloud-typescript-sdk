// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopyBroadcastSceneFromTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 9:16
   */
  ratio?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * BS1b2WNnRMu4ouRzT4clY9Jhg
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      ratio: 'ratio',
      templateId: 'templateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ratio: 'string',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

