// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAgenticVpcEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the endpoint to be deleted. You can delete the endpoint even if it has associated data sources, but this may interrupt access.
   * 
   * This parameter is required.
   * 
   * @example
   * ep-7xvra4ad6619266ba43d
   */
  endpointId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointId: 'EndpointId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

