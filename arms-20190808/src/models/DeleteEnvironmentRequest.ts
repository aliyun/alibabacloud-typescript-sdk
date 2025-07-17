// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEnvironmentRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to delete the related Prometheus instance.
   * 
   * @example
   * true
   * 
   * **if can be null:**
   * true
   */
  deletePromInstance?: boolean;
  /**
   * @remarks
   * The ID of the environment instance.
   * 
   * This parameter is required.
   * 
   * @example
   * env-xxxxxx
   */
  environmentId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      deletePromInstance: 'DeletePromInstance',
      environmentId: 'EnvironmentId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletePromInstance: 'boolean',
      environmentId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

