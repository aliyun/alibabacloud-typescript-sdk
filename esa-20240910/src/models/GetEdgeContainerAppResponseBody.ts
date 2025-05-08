// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetEdgeContainerAppResponseBodyApp } from "./GetEdgeContainerAppResponseBodyApp";


export class GetEdgeContainerAppResponseBody extends $dara.Model {
  /**
   * @remarks
   * The basic information about the application.
   */
  app?: GetEdgeContainerAppResponseBodyApp;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 156A6B-677B1A-4297B7-9187B7-2B44792
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: GetEdgeContainerAppResponseBodyApp,
      requestId: 'string',
    };
  }

  validate() {
    if(this.app && typeof (this.app as any).validate === 'function') {
      (this.app as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

