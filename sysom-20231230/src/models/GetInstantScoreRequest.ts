// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstantScoreRequest extends $dara.Model {
  /**
   * @remarks
   * Cluster ID
   * 
   * @example
   * 2ijff4be-bf24-4070-89ca-c47c879b0g32
   */
  cluster?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * i-wz9d00ut2ska3mlyhn6j
   */
  instance?: string;
  static names(): { [key: string]: string } {
    return {
      cluster: 'cluster',
      instance: 'instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: 'string',
      instance: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

