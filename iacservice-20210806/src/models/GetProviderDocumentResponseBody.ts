// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProviderDocumentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Terraform provider resource document.
   */
  document?: string;
  /**
   * @remarks
   * The Terraform provider version.
   * 
   * @example
   * 1.206.0
   */
  providerVersion?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CD478792-6952-5A1C-9F57-78932BF0FAC6
   */
  requestId?: string;
  /**
   * @remarks
   * The Terraform resource type.
   * 
   * @example
   * alicloud_route_table
   */
  terraformResourceType?: string;
  static names(): { [key: string]: string } {
    return {
      document: 'document',
      providerVersion: 'providerVersion',
      requestId: 'requestId',
      terraformResourceType: 'terraformResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      document: 'string',
      providerVersion: 'string',
      requestId: 'string',
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

