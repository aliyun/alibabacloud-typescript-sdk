// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Container } from "./Container";


export class PublishWebApplicationRevisionInput extends $dara.Model {
  /**
   * @remarks
   * The container configurations of the revision version.
   * 
   * This parameter is required.
   */
  containers?: Container[];
  /**
   * @remarks
   * The version description.
   * 
   * @example
   * test version
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable Application Real-Time Monitoring Service (ARMS) monitoring.
   * 
   * @example
   * true
   */
  enableArmsMetrics?: boolean;
  /**
   * @remarks
   * Specifies whether to switch all traffic to a new version after the new version is released. Default value: false.
   * 
   * @example
   * false
   */
  takeEffect?: boolean;
  static names(): { [key: string]: string } {
    return {
      containers: 'Containers',
      description: 'Description',
      enableArmsMetrics: 'EnableArmsMetrics',
      takeEffect: 'TakeEffect',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containers: { 'type': 'array', 'itemType': Container },
      description: 'string',
      enableArmsMetrics: 'boolean',
      takeEffect: 'boolean',
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

