// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStreamBatchJobMappingShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  streamBatchJobMappingCreateCommandShrink?: string;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      streamBatchJobMappingCreateCommandShrink: 'StreamBatchJobMappingCreateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      streamBatchJobMappingCreateCommandShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

