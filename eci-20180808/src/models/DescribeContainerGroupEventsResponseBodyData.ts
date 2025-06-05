// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeContainerGroupEventsResponseBodyDataEvents } from "./DescribeContainerGroupEventsResponseBodyDataEvents";


export class DescribeContainerGroupEventsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The annotations of the elastic container instance.
   * 
   * @example
   * "{\\"tenancy.x-k8s.io/namespace\\":\\"redis\\"}"
   */
  annotations?: string;
  /**
   * @remarks
   * The ID of the elastic container instance.
   * 
   * @example
   * eci-uf6fonnghi50v6nq****
   */
  containerGroupId?: string;
  /**
   * @remarks
   * The events.
   */
  events?: DescribeContainerGroupEventsResponseBodyDataEvents[];
  /**
   * @remarks
   * The name of the elastic container instance.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The namespace where the elastic container instance resides.
   * 
   * @example
   * redis
   */
  namespace?: string;
  /**
   * @remarks
   * The UUID of the elastic container instance.
   * 
   * @example
   * 3fc6b309-****-****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      annotations: 'Annotations',
      containerGroupId: 'ContainerGroupId',
      events: 'Events',
      name: 'Name',
      namespace: 'Namespace',
      uuid: 'uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotations: 'string',
      containerGroupId: 'string',
      events: { 'type': 'array', 'itemType': DescribeContainerGroupEventsResponseBodyDataEvents },
      name: 'string',
      namespace: 'string',
      uuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.events)) {
      $dara.Model.validateArray(this.events);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

