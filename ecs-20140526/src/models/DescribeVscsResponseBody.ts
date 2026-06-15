// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVscsResponseBodyVscsTags extends $dara.Model {
  /**
   * @example
   * name
   */
  tagKey?: string;
  /**
   * @example
   * 15
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVscsResponseBodyVscs extends $dara.Model {
  /**
   * @example
   * ali***-post-cn-j4g45iqze00f
   */
  description?: string;
  /**
   * @example
   * i-uf69***21l8zuoizdq
   */
  instanceId?: string;
  /**
   * @example
   * rg-aek2zex4ehdyjvq
   */
  resourceGroupId?: string;
  /**
   * @example
   * In_use
   */
  status?: string;
  tags?: DescribeVscsResponseBodyVscsTags[];
  /**
   * @example
   * vsc-hp34ue**g0wmycb27bwal
   */
  vscId?: string;
  /**
   * @example
   * test-vsc
   */
  vscName?: string;
  /**
   * @example
   * Primary
   */
  vscType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tags: 'Tags',
      vscId: 'VscId',
      vscName: 'VscName',
      vscType: 'VscType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': DescribeVscsResponseBodyVscsTags },
      vscId: 'string',
      vscName: 'string',
      vscType: 'string',
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

export class DescribeVscsResponseBody extends $dara.Model {
  /**
   * @example
   * AAAAAdDWBF2
   */
  nextToken?: string;
  /**
   * @example
   * 473469C7-AA6F-**-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  vscs?: DescribeVscsResponseBodyVscs[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      vscs: 'Vscs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      vscs: { 'type': 'array', 'itemType': DescribeVscsResponseBodyVscs },
    };
  }

  validate() {
    if(Array.isArray(this.vscs)) {
      $dara.Model.validateArray(this.vscs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

