// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePcaCertificateRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * runtime
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePcaCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The alias of the certificate.
   * 
   * @example
   * cert-name
   */
  aliasName?: string;
  /**
   * @remarks
   * A client token used to ensure the idempotence of the request. The client generates this value to make sure that it is unique among different requests. The token can be a maximum of 64 ASCII characters and cannot contain non-ASCII characters.
   * 
   * @example
   * XXX
   */
  clientToken?: string;
  /**
   * @remarks
   * The unique identifier of the CA certificate.
   * 
   * > Call [DescribeCACertificateList](https://help.aliyun.com/document_detail/328095.html) to query the unique identifiers of all CA certificates.
   * 
   * @example
   * 160ae6bb538d538c70c01f81dcf2****
   */
  identifier?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-ae******4wia
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * A list of tags.
   */
  tags?: UpdatePcaCertificateRequestTags[];
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      clientToken: 'ClientToken',
      identifier: 'Identifier',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      clientToken: 'string',
      identifier: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': UpdatePcaCertificateRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

