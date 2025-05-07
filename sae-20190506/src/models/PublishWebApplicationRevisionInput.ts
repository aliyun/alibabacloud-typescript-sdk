// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Container } from "./Container";


export class PublishWebApplicationRevisionInput extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  containers?: Container[];
  /**
   * @example
   * test version
   */
  description?: string;
  enableArmsMetrics?: boolean;
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

