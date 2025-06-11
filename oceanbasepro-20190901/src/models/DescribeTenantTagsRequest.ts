// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTenantTagsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the OceanBase cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * ob317v4uif****
   */
  instanceId?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * [{"Key": "xxx", "Value", "xxx"}]
   */
  tags?: string;
  /**
   * @remarks
   * The JSON string of the tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ["t5r0x2f6q****", "t33h8y08k****", "t5r41rtl7****"]
   */
  tenantIds?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      tags: 'Tags',
      tenantIds: 'TenantIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      tags: 'string',
      tenantIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

