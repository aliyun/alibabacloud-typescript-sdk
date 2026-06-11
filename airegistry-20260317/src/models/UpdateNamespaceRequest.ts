// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNamespaceRequest extends $dara.Model {
  /**
   * @example
   * 用于管理客服场景的Prompt
   */
  description?: string;
  /**
   * @example
   * 我的Prompt空间
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 550e8400-e29b-41d4-a716-446655440000
   */
  namespaceId?: string;
  scanPolicy?: string;
  /**
   * @example
   * customer-service,production
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      namespaceId: 'NamespaceId',
      scanPolicy: 'ScanPolicy',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      namespaceId: 'string',
      scanPolicy: 'string',
      tags: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

