// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAScriptsRequest extends $dara.Model {
  /**
   * @remarks
   * The AScript rule IDs. You can specify at most 20 IDs in each call.
   */
  AScriptIds?: string[];
  /**
   * @remarks
   * The AScript rule names. You can specify at most 10 names in each call.
   */
  AScriptNames?: string[];
  /**
   * @remarks
   * The listener IDs. You can specify at most 20 listener IDs in each call.
   */
  listenerIds?: string[];
  /**
   * @remarks
   * The maximum number of entries to return.
   * 
   * Valid values: **1** to **100**.
   * 
   * Default value: **20**. If you do not specify this parameter, the default value is used.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   You do not need to specify this parameter for the first request.****
   * *   You must specify the token that is obtained from the previous query as the value of **NextToken**.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      AScriptIds: 'AScriptIds',
      AScriptNames: 'AScriptNames',
      listenerIds: 'ListenerIds',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AScriptIds: { 'type': 'array', 'itemType': 'string' },
      AScriptNames: { 'type': 'array', 'itemType': 'string' },
      listenerIds: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.AScriptIds)) {
      $dara.Model.validateArray(this.AScriptIds);
    }
    if(Array.isArray(this.AScriptNames)) {
      $dara.Model.validateArray(this.AScriptNames);
    }
    if(Array.isArray(this.listenerIds)) {
      $dara.Model.validateArray(this.listenerIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

