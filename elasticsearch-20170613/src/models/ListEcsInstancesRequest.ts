// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEcsInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * test
   * 
   * @example
   * ["i-bp13y63575oypr9d****","i-bp1gyhphjaj73jsr****"]
   */
  ecsInstanceIds?: string;
  /**
   * @remarks
   * [{ "tagKey":"a","tagValue":"b"}]
   * 
   * @example
   * test
   */
  ecsInstanceName?: string;
  /**
   * @remarks
   * 10
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * ["i-bp13y63575oypr9d\\*\\*\\*\\*","i-bp1gyhphjaj73jsr\\*\\*\\*\\*"]
   * 
   * @example
   * 10
   */
  size?: number;
  /**
   * @remarks
   * vpc-bp16k1dvzxtmagcva\\*\\*\\*\\*
   * 
   * @example
   * [{ "tagKey":"a","tagValue":"b"}]
   */
  tags?: string;
  /**
   * @remarks
   * The ID of the request.
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

