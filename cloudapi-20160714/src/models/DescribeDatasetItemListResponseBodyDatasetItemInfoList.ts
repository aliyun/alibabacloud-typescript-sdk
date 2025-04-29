// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDatasetItemListResponseBodyDatasetItemInfoList extends $dara.Model {
  /**
   * @remarks
   * The time when the data entry was created.
   * 
   * @example
   * 2022-09-21T12:58:43Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The ID of the dataset.
   * 
   * @example
   * 4add6a61804e47858266883e********
   */
  datasetId?: string;
  /**
   * @remarks
   * The ID of the data entry.
   * 
   * @example
   * 5045****
   */
  datasetItemId?: string;
  /**
   * @remarks
   * The description of the data entry.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * The time in UTC when the data entry expires. The time is in the **yyyy-MM-ddTHH:mm:ssZ** format. If this parameter is empty, the data entry does not expire.
   * 
   * @example
   * 2022-09-22T12:00:00Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The last modification time (UTC) of the data entry.
   * 
   * @example
   * 2022-09-21T12:58:43Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The value of the data entry.
   * 
   * @example
   * 106.43.XXX.XXX
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      datasetId: 'DatasetId',
      datasetItemId: 'DatasetItemId',
      description: 'Description',
      expiredTime: 'ExpiredTime',
      modifiedTime: 'ModifiedTime',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      datasetId: 'string',
      datasetItemId: 'string',
      description: 'string',
      expiredTime: 'string',
      modifiedTime: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

