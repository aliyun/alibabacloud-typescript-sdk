// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * d700e680-aa4d-4ec1-afc2-6566b5ff\\*\\*\\*\\*
   * 
   * This parameter is required.
   * 
   * @example
   * d700e680-aa4d-4ec1-afc2-6566b5ff****
   */
  appId?: string;
  /**
   * @remarks
   * 1
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * b2a8a925-477a-4ed7-b825-d5e22500\\*\\*\\*\\*
   * 
   * This parameter is required.
   * 
   * @example
   * b2a8a925-477a-4ed7-b825-d5e22500****
   */
  groupId?: string;
  instanceId?: string;
  /**
   * @remarks
   * 10
   * 
   * @example
   * 10
   */
  pageSize?: number;
  pipelineId?: string;
  /**
   * @remarks
   * true
   * 
   * @example
   * true
   */
  reverse?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      currentPage: 'CurrentPage',
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      pipelineId: 'PipelineId',
      reverse: 'Reverse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      currentPage: 'number',
      groupId: 'string',
      instanceId: 'string',
      pageSize: 'number',
      pipelineId: 'string',
      reverse: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

