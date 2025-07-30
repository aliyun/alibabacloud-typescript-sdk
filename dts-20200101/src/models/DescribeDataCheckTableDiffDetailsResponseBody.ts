// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataCheckTableDiffDetailsResponseBodyDiffDetails extends $dara.Model {
  /**
   * @remarks
   * The details of the inconsistent data, whose value is a JSON string. The JSON string contains the following parameters:
   * 
   * *   column: the name of the field.
   * *   source: the value of the field in the source database.
   * *   dest: the value of the field in the destination database.
   * *   isPrimary: indicates whether the field is a primary key.
   * 
   * @example
   * [     {         "column": "id",         "source": "9511",         "dest": "9511",         "isPrimary": true     },     {         "column": "state",         "source": "3",         "dest": "2",         "isPrimary": false     },     {         "column": "create_time",         "source": "2023-04-11 14:07:17.0",         "dest": "NULL",         "isPrimary": false     },     {         "column": "update_time",         "source": "2023-04-11 06:07:17.0",         "dest": "2023-04-11 06:02:29.0",         "isPrimary": false     } ]
   */
  diff?: string;
  /**
   * @remarks
   * The time when the data verification was performed.
   * 
   * @example
   * 2023-04-23T10:36:05.000+00:00
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The auto-increment primary key that is used to identify the data in a verification result.
   * 
   * @example
   * 13058****
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      diff: 'Diff',
      gmtCreated: 'GmtCreated',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diff: 'string',
      gmtCreated: 'string',
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataCheckTableDiffDetailsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the source database to which the table that contains inconsistent data belongs.
   * 
   * @example
   * db_dtstest
   */
  dbName?: string;
  /**
   * @remarks
   * The number of data rows that contain inconsistent data.
   * 
   * @example
   * 1
   */
  diffCount?: number;
  /**
   * @remarks
   * The information about the inconsistent data.
   */
  diffDetails?: DescribeDataCheckTableDiffDetailsResponseBodyDiffDetails[];
  /**
   * @remarks
   * The dynamic part in the error message. This parameter is used to replace the \\*\\*%s\\*\\* variable in the **ErrMessage** parameter.
   * 
   * > For example, if the value of the **ErrMessage** parameter is **The Value of Input Parameter %s is not valid** and the value of the **DynamicMessage** parameter is **Type**, the specified **Type** parameter is invalid.
   * 
   * @example
   * Type
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * InvalidParameter
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * The value of the parameter tbName is invalid.
   */
  errMessage?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * dtsog8q1z3tc9t****"
   */
  instanceId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 621BB4F8-3016-4FAA-8D5A-5D3163CC****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The name of the table that contains inconsistent data in the source database.
   * 
   * @example
   * test_person
   */
  tbName?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      diffCount: 'DiffCount',
      diffDetails: 'DiffDetails',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      instanceId: 'InstanceId',
      requestId: 'RequestId',
      success: 'Success',
      tbName: 'TbName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      diffCount: 'number',
      diffDetails: { 'type': 'array', 'itemType': DescribeDataCheckTableDiffDetailsResponseBodyDiffDetails },
      dynamicMessage: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      instanceId: 'string',
      requestId: 'string',
      success: 'boolean',
      tbName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.diffDetails)) {
      $dara.Model.validateArray(this.diffDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

