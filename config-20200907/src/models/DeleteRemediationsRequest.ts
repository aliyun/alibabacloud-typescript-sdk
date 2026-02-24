// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRemediationsRequest extends $dara.Model {
  /**
   * @remarks
   * The remediation setting ID. To specify multiple IDs, separate them with commas (,).
   * 
   * For information about how to obtain a remediation setting ID, see [ListRemediations](https://help.aliyun.com/document_detail/270772.html).
   * 
   * This parameter is required.
   * 
   * @example
   * crr-909ba2d4716700eb****
   */
  remediationIds?: string;
  static names(): { [key: string]: string } {
    return {
      remediationIds: 'RemediationIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remediationIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

