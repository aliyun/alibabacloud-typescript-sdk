// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMountPointsVscAttachInfoShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  inputRegionId?: string;
  /**
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @example
   * MYR6sz6qkmauspAy8oxjHP-tOLtD4KSv3DzI7G6iywTx1ZCExO50GtSuiTB9z0JppvYQ2iUa8s4HbcFanMQfDIlds4da87_Ax4UJMva****
   */
  nextToken?: string;
  queryInfosShrink?: string;
  /**
   * @example
   * false
   */
  useAssumeRoleChkServerPerm?: boolean;
  static names(): { [key: string]: string } {
    return {
      inputRegionId: 'InputRegionId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      queryInfosShrink: 'QueryInfos',
      useAssumeRoleChkServerPerm: 'UseAssumeRoleChkServerPerm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputRegionId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      queryInfosShrink: 'string',
      useAssumeRoleChkServerPerm: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

