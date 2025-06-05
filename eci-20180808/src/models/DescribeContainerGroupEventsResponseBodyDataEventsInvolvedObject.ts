// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContainerGroupEventsResponseBodyDataEventsInvolvedObject extends $dara.Model {
  /**
   * @remarks
   * The version of Kubernetes.
   * 
   * @example
   * v1
   */
  apiVersion?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * Pod
   */
  kind?: string;
  /**
   * @remarks
   * The resource name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The namespace where the resource resides.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * eci-8vb5nkcq3a5cu0p3****
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      kind: 'Kind',
      name: 'Name',
      namespace: 'Namespace',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      kind: 'string',
      name: 'string',
      namespace: 'string',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

