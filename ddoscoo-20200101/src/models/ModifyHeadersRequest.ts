// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyHeadersRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  customHeaders?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  domain?: string;
  /**
   * @example
   * {"X-Client-IP":true,"X-True-IP":true,"Web-Server-Type":true,"WL-Proxy-Client-IP":true,"X-Forwarded-Proto":true}
   */
  embeddedHeaders?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      customHeaders: 'CustomHeaders',
      domain: 'Domain',
      embeddedHeaders: 'EmbeddedHeaders',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customHeaders: 'string',
      domain: 'string',
      embeddedHeaders: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

