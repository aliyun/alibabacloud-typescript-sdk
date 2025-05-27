// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApiDestinationRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the API destination.
   * 
   * This parameter is required.
   * 
   * @example
   * api-destination-name
   */
  apiDestinationName?: string;
  static names(): { [key: string]: string } {
    return {
      apiDestinationName: 'ApiDestinationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiDestinationName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

