// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ContainerInfo } from "./ContainerInfo";


export class ListServiceContainersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The containers of the service.
   */
  containers?: ContainerInfo[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * foo
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      containers: 'Containers',
      requestId: 'RequestId',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containers: { 'type': 'array', 'itemType': ContainerInfo },
      requestId: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.containers)) {
      $dara.Model.validateArray(this.containers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

