// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLogFieldsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The type of the log to which the field belongs.
   * 
   * @example
   * HTTP_ACTIVITY
   */
  activityName?: string;
  /**
   * @remarks
   * The internal code of the field description.
   * 
   * @example
   * sas.cloudsiem.prod.activity_name
   */
  fieldDesc?: string;
  /**
   * @remarks
   * The name of the field.
   * 
   * @example
   * activity_name
   */
  fieldName?: string;
  /**
   * @remarks
   * The data type of the field. Valid values:
   * 
   * *   varchar
   * *   bigint
   * 
   * @example
   * varchar
   */
  fieldType?: string;
  /**
   * @remarks
   * The log source to which the field belongs.
   * 
   * @example
   * cloud_siem_aegis_sas_alert
   */
  logCode?: string;
  static names(): { [key: string]: string } {
    return {
      activityName: 'ActivityName',
      fieldDesc: 'FieldDesc',
      fieldName: 'FieldName',
      fieldType: 'FieldType',
      logCode: 'LogCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityName: 'string',
      fieldDesc: 'string',
      fieldName: 'string',
      fieldType: 'string',
      logCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

