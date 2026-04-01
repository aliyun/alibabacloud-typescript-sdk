// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImportTasksRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @example
   * 30
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAdDWBF2
   */
  nextToken?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      ownerId: 'number',
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

