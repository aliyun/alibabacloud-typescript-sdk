// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComputeInstancesShrinkRequest extends $dara.Model {
  instanceId?: string;
  instanceIdsShrink?: string;
  maxResults?: number;
  nextToken?: string;
  orderId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceIdsShrink: 'InstanceIds',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderId: 'OrderId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceIdsShrink: 'string',
      maxResults: 'number',
      nextToken: 'string',
      orderId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

