// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListApiDestinationsResponseBodyDataApiDestinationsHttpApiParameters } from "./ListApiDestinationsResponseBodyDataApiDestinationsHttpApiParameters";


export class ListApiDestinationsResponseBodyDataApiDestinations extends $dara.Model {
  /**
   * @remarks
   * The name of the API destination.
   * 
   * @example
   * api-destination-2
   */
  apiDestinationName?: string;
  /**
   * @remarks
   * The connection name.
   * 
   * @example
   * connection-name
   */
  connectionName?: string;
  /**
   * @remarks
   * The description of the connection.
   * 
   * @example
   * demo
   */
  description?: string;
  /**
   * @remarks
   * The time when the API destination was created.
   * 
   * @example
   * 1665223213000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The request parameters that are configured for the API destination.
   */
  httpApiParameters?: ListApiDestinationsResponseBodyDataApiDestinationsHttpApiParameters;
  static names(): { [key: string]: string } {
    return {
      apiDestinationName: 'ApiDestinationName',
      connectionName: 'ConnectionName',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      httpApiParameters: 'HttpApiParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiDestinationName: 'string',
      connectionName: 'string',
      description: 'string',
      gmtCreate: 'number',
      httpApiParameters: ListApiDestinationsResponseBodyDataApiDestinationsHttpApiParameters,
    };
  }

  validate() {
    if(this.httpApiParameters && typeof (this.httpApiParameters as any).validate === 'function') {
      (this.httpApiParameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

