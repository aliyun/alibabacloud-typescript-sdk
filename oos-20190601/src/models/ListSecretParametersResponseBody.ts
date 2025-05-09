// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSecretParametersResponseBodyParameters } from "./ListSecretParametersResponseBodyParameters";


export class ListSecretParametersResponseBody extends $dara.Model {
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
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * sPH90GZOVGC6KPDUL0FIIbEtMQHq_19S6_4O_XqA
   */
  nextToken?: string;
  /**
   * @remarks
   * The information about the parameters.
   */
  parameters?: ListSecretParametersResponseBodyParameters[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CA9C6248-AF2A-4AE9-A166-88FD901BBB90
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      parameters: 'Parameters',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      parameters: { 'type': 'array', 'itemType': ListSecretParametersResponseBodyParameters },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

