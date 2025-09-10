// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyQuotaTemplateServiceStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The status of the quota template. Valid values:
   * 
   * *   \\-1: The quota template is disabled.
   * *   1: The quota template is enabled.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  serviceStatus?: number;
  static names(): { [key: string]: string } {
    return {
      serviceStatus: 'ServiceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceStatus: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

