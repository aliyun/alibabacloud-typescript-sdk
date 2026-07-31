// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEcsInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The list of ECS instance IDs. The value can be a JSON array that consists of up to 100 instance IDs separated by commas (,).
   * 
   * @example
   * ["i-bp13y63575oypr9d****","i-bp1gyhphjaj73jsr****"]
   */
  ecsInstanceIds?: string;
  /**
   * @remarks
   * The ECS instance name.
   * 
   * @example
   * test
   */
  ecsInstanceName?: string;
  /**
   * @remarks
   * The page number of the returned results. Maximum value: 500.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of results per page. Default value: 10. Maximum value: 500.
   * 
   * @example
   * 10
   */
  size?: number;
  /**
   * @remarks
   * The ECS instance tags. The following fields must be included:
   * 
   * - tagKey: the tag key.
   * - tagValue: the tag value.
   * 
   * @example
   * [{ "tagKey":"a","tagValue":"b"}]
   */
  tags?: string;
  /**
   * @remarks
   * The VPC ID of the ECS instance.
   * 
   * @example
   * vpc-bp16k1dvzxtmagcva****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      ecsInstanceIds: 'ecsInstanceIds',
      ecsInstanceName: 'ecsInstanceName',
      page: 'page',
      size: 'size',
      tags: 'tags',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsInstanceIds: 'string',
      ecsInstanceName: 'string',
      page: 'number',
      size: 'number',
      tags: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

