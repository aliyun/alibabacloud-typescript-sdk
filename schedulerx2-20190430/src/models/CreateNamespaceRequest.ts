// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNamespaceRequest extends $dara.Model {
  /**
   * @remarks
   * The namespace description.
   * 
   * @example
   * Test
   */
  description?: string;
  /**
   * @remarks
   * The namespace name.
   * 
   * This parameter is required.
   * 
   * @example
   * test-env
   */
  name?: string;
  /**
   * @remarks
   * The region ID. For example, `cn-hangzhou` specifies the China (Hangzhou) region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The namespace UID. This value must be globally unique. We recommend that you use a UUID.
   * 
   * @example
   * adcfc35d-e2fe-4fe9-bbaa-20e90ffc****
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      regionId: 'RegionId',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      regionId: 'string',
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

