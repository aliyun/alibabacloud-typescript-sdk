// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourcesResponseBodyDataResources extends $dara.Model {
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * file
   */
  comment?: string;
  /**
   * @remarks
   * The Base64-encoded 128-bit MD5 hash value of the HTTP request body.
   * 
   * @example
   * MACiECZtnLiNkNS1v5****=1
   */
  contentMD5?: string;
  /**
   * @remarks
   * The time when the resource was created.
   * 
   * @example
   * 2022-01-29T03:34:09Z
   */
  creationTime?: number;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * res_1
   */
  displayName?: string;
  /**
   * @remarks
   * The time when the resource was modified.
   * 
   * @example
   * 2023-04-18T06:15:05Z
   */
  lastModifiedTime?: number;
  /**
   * @remarks
   * The user who updated the resource.
   * 
   * @example
   * ALIYUN$xxx@test.aliyunid.com
   */
  lastUpdator?: string;
  /**
   * @remarks
   * The name of the resource.
   * 
   * @example
   * res_1
   */
  name?: string;
  /**
   * @remarks
   * The owner of the resource.
   * 
   * @example
   * 1265860483008101
   */
  owner?: string;
  /**
   * @remarks
   * The schema to which the resource belongs.
   * 
   * @example
   * schemaA
   */
  schema?: string;
  /**
   * @remarks
   * The size of the resource.
   * 
   * @example
   * 10
   */
  size?: number;
  /**
   * @remarks
   * The resource type.
   * 
   * Valid values:
   * 
   * *   file
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   py
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   jar
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   volumefile
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   table
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * file
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      contentMD5: 'contentMD5',
      creationTime: 'creationTime',
      displayName: 'displayName',
      lastModifiedTime: 'lastModifiedTime',
      lastUpdator: 'lastUpdator',
      name: 'name',
      owner: 'owner',
      schema: 'schema',
      size: 'size',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      contentMD5: 'string',
      creationTime: 'number',
      displayName: 'string',
      lastModifiedTime: 'number',
      lastUpdator: 'string',
      name: 'string',
      owner: 'string',
      schema: 'string',
      size: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

