// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePcaCertificateRequestTags extends $dara.Model {
  /**
   * @example
   * runtime
   */
  key?: string;
  /**
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
   * @example
   * cert-name
   */
  aliasName?: string;
  /**
   * @example
   * XXX
   */
  clientToken?: string;
  /**
   * @example
   * 160ae6bb538d538c70c01f81dcf2****
   */
  identifier?: string;
  /**
   * @example
   * rg-ae******4wia
   */
  resourceGroupId?: string;
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

