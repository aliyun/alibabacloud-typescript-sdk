// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInventoryEntriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the request was sent.
   * 
   * @example
   * 2020-09-17T12:28:13Z
   */
  captureTime?: string;
  /**
   * @remarks
   * The configurations of the component.
   */
  entries?: { [key: string]: any }[];
  /**
   * @remarks
   * The ID of the ECS instance.
   * 
   * @example
   * i-bp1cpoxxxwxxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The returned value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * gAAAAABfTgv5ewUWmNdJ3g7JVLvX70sPH90GZOVGC
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A81E4B2E-6B33-4BAE-9856-55DB7C893E01
   */
  requestId?: string;
  /**
   * @remarks
   * The version number of the component.
   * 
   * @example
   * 1.0
   */
  schemaVersion?: string;
  /**
   * @remarks
   * The name of the component.
   * 
   * @example
   * ACS:InstanceInformation
   */
  typeName?: string;
  static names(): { [key: string]: string } {
    return {
      captureTime: 'CaptureTime',
      entries: 'Entries',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      schemaVersion: 'SchemaVersion',
      typeName: 'TypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      captureTime: 'string',
      entries: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      schemaVersion: 'string',
      typeName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.entries)) {
      $dara.Model.validateArray(this.entries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

