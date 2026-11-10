// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProviderDocumentRequest extends $dara.Model {
  /**
   * @remarks
   * The Terraform provider version.
   * 
   * @example
   * 1.248.0
   */
  providerVersion?: string;
  /**
   * @remarks
   * The Terraform resource type.
   * 
   * This parameter is required.
   * 
   * @example
   * alicloud_route_table
   */
  terraformResourceType?: string;
  static names(): { [key: string]: string } {
    return {
      providerVersion: 'providerVersion',
      terraformResourceType: 'terraformResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      providerVersion: 'string',
      terraformResourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

