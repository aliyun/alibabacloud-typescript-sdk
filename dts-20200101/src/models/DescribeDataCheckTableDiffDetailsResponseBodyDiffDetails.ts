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

