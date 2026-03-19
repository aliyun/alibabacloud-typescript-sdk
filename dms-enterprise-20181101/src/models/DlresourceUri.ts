// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DLResourceUri extends $dara.Model {
  /**
   * @remarks
   * The resource type.
   * 
   * Valid values:
   * 
   * *   ARCHIVE
   * *   JAR
   * *   FILE
   * 
   * @example
   * JAR
   */
  resourceType?: string;
  /**
   * @remarks
   * The URL used to access the resource.
   * 
   * @example
   * hdfs://name****.example.com:8020/user/hive/udfs/my_***.jar
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

