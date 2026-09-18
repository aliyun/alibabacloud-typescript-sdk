// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreviewGroupSourceRequest extends $dara.Model {
  /**
   * @remarks
   * The project group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * exampleGroupId
   */
  groupId?: string;
  /**
   * @remarks
   * The data source ID.
   * 
   * This parameter is required.
   * 
   * @example
   * src_feishu_doc_1
   */
  sourceId?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. You can pass this parameter explicitly by using the --tenant-id option in winnexo-cli.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'groupId',
      sourceId: 'sourceId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      sourceId: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

