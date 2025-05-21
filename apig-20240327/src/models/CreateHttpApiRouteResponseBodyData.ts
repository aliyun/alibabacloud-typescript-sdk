// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHttpApiRouteResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The route ID.
   * 
   * @example
   * hr-cr82undlhtgrlej***
   */
  routeId?: string;
  static names(): { [key: string]: string } {
    return {
      routeId: 'routeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

