// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOpEntitiesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1536715558000
   */
  endTime?: number;
  /**
   * @example
   * xx
   */
  entityObject?: string;
  /**
   * @example
   * 1
   */
  entityType?: number;
  opAction?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * test
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1.1.1.1
   */
  sourceIp?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1534123558000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      entityObject: 'EntityObject',
      entityType: 'EntityType',
      opAction: 'OpAction',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      sourceIp: 'SourceIp',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      entityObject: 'string',
      entityType: 'number',
      opAction: 'number',
      pageNo: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      sourceIp: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

