// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClientCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The unique identifier of the client or server-side certificate that you want to query.
   * 
   * > You can call [ListClientCertificate](https://help.aliyun.com/document_detail/330884.html) to query the unique identifiers of all client and server-side certificates.
   * 
   * @example
   * 160ae6bb538d538c70c01f81dcf2****
   */
  identifier?: string;
  /**
   * @remarks
   * The ID of the resource group. Call the [ListResources](https://help.aliyun.com/document_detail/2716559.html) operation to obtain this ID.
   * 
   * @example
   * rg-ae******4wia
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20.
   * 
   * @example
   * 20
   */
  showSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      identifier: 'Identifier',
      resourceGroupId: 'ResourceGroupId',
      showSize: 'ShowSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      identifier: 'string',
      resourceGroupId: 'string',
      showSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

