// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CAPConfig } from "./Capconfig";


export class CreateToolInput extends $dara.Model {
  CAPConfig?: CAPConfig;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  schema?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sourceType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  toolType?: string;
  static names(): { [key: string]: string } {
    return {
      CAPConfig: 'CAPConfig',
      description: 'description',
      name: 'name',
      schema: 'schema',
      sourceType: 'sourceType',
      toolType: 'toolType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CAPConfig: CAPConfig,
      description: 'string',
      name: 'string',
      schema: 'string',
      sourceType: 'string',
      toolType: 'string',
    };
  }

  validate() {
    if(this.CAPConfig && typeof (this.CAPConfig as any).validate === 'function') {
      (this.CAPConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

