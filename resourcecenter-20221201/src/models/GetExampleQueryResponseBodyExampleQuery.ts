// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetExampleQueryResponseBodyExampleQuery extends $dara.Model {
  /**
   * @remarks
   * The description of the template.
   * 
   * @example
   * Queries all resources on which you have permissions and sorts the resources by resource type and resource ID.
   */
  description?: string;
  /**
   * @remarks
   * The query statement in the template.
   * 
   * @example
   * SELECT
   *   resource_id,
   *   resource_name,
   *   region_id,
   *   zone_id,
   *   resource_type,
   *   account_id,
   *   create_time,
   *   resource_group_id,
   *   tags,
   *   ip_addresses,
   *   vpc_id,
   *   v_switch_id
   * FROM
   *   resources
   * ORDER BY
   *   resource_type,
   *   resource_id
   * LIMIT
   *   1000 OFFSET 0;
   */
  expression?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * Query of All Alibaba Cloud Resources
   */
  name?: string;
  /**
   * @remarks
   * The ID of the template.
   * 
   * @example
   * sq-0PfKy****
   */
  queryId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      expression: 'Expression',
      name: 'Name',
      queryId: 'QueryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      expression: 'string',
      name: 'string',
      queryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

