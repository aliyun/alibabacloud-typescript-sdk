// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDoctorHDFSDirectoriesRequest extends $dara.Model {
  /**
   * @remarks
   * 集群ID。
   * 
   * This parameter is required.
   * 
   * @example
   * c-b933c5aac8fe****
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2023-01-01
   */
  dateTime?: string;
  /**
   * @example
   * /tmp/test
   */
  dirPath?: string;
  /**
   * @remarks
   * 一次获取的最大记录数。取值范围：1~100。
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * 标记当前开始读取的位置，置空表示从头开始。
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C89568980
   */
  nextToken?: string;
  /**
   * @example
   * smallFileCount
   */
  orderBy?: string;
  /**
   * @example
   * ASC
   */
  orderType?: string;
  /**
   * @remarks
   * 区域ID。
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dateTime: 'DateTime',
      dirPath: 'DirPath',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderBy: 'OrderBy',
      orderType: 'OrderType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dateTime: 'string',
      dirPath: 'string',
      maxResults: 'number',
      nextToken: 'string',
      orderBy: 'string',
      orderType: 'string',
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

