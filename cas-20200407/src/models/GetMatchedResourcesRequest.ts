// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMatchedResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The certificate IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * 19736665
   */
  certIds?: string;
  /**
   * @remarks
   * Because of the large number of matched resources, the backend uses aggregation and does not support pagination. This parameter is reserved. By default, a maximum of 2,000 entries are returned.
   * 
   * @example
   * 2000
   */
  maxResults?: number;
  /**
   * @remarks
   * Because of the large number of matched resources, the backend uses aggregation and does not support pagination. This parameter is reserved.
   * 
   * @example
   * 666
   */
  nextToken?: string;
  /**
   * @remarks
   * The resource match scope. This parameter can be empty.
   * 
   * @example
   * 目前支持全部云产品
   */
  resourceScope?: string;
  static names(): { [key: string]: string } {
    return {
      certIds: 'CertIds',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceScope: 'ResourceScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIds: 'string',
      maxResults: 'number',
      nextToken: 'string',
      resourceScope: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

