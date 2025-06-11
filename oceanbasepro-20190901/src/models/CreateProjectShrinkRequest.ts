// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProjectShrinkRequest extends $dara.Model {
  commonTransferConfigShrink?: string;
  /**
   * @example
   * true
   */
  enableFullTransfer?: boolean;
  /**
   * @example
   * true
   */
  enableFullVerify?: boolean;
  /**
   * @example
   * true
   */
  enableIncrTransfer?: boolean;
  /**
   * @example
   * true
   */
  enableReverseIncrTransfer?: boolean;
  /**
   * @example
   * true
   */
  enableStructTransfer?: boolean;
  fullTransferConfigShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  id?: string;
  incrTransferConfigShrink?: string;
  labelIdsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * open_api_create_project/oacp_xxx
   */
  ossKey?: string;
  reverseIncrTransferConfigShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e_4j0cz****
   */
  sinkEndpointId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e_4j0c12z****
   */
  sourceEndpointId?: string;
  structTransferConfigShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  transferMappingShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MIGRATION
   */
  type?: string;
  /**
   * @example
   * true
   */
  useOss?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * g_abcdefj***
   */
  workerGradeId?: string;
  static names(): { [key: string]: string } {
    return {
      commonTransferConfigShrink: 'CommonTransferConfig',
      enableFullTransfer: 'EnableFullTransfer',
      enableFullVerify: 'EnableFullVerify',
      enableIncrTransfer: 'EnableIncrTransfer',
      enableReverseIncrTransfer: 'EnableReverseIncrTransfer',
      enableStructTransfer: 'EnableStructTransfer',
      fullTransferConfigShrink: 'FullTransferConfig',
      id: 'Id',
      incrTransferConfigShrink: 'IncrTransferConfig',
      labelIdsShrink: 'LabelIds',
      name: 'Name',
      ossKey: 'OssKey',
      reverseIncrTransferConfigShrink: 'ReverseIncrTransferConfig',
      sinkEndpointId: 'SinkEndpointId',
      sourceEndpointId: 'SourceEndpointId',
      structTransferConfigShrink: 'StructTransferConfig',
      transferMappingShrink: 'TransferMapping',
      type: 'Type',
      useOss: 'UseOss',
      workerGradeId: 'WorkerGradeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonTransferConfigShrink: 'string',
      enableFullTransfer: 'boolean',
      enableFullVerify: 'boolean',
      enableIncrTransfer: 'boolean',
      enableReverseIncrTransfer: 'boolean',
      enableStructTransfer: 'boolean',
      fullTransferConfigShrink: 'string',
      id: 'string',
      incrTransferConfigShrink: 'string',
      labelIdsShrink: 'string',
      name: 'string',
      ossKey: 'string',
      reverseIncrTransferConfigShrink: 'string',
      sinkEndpointId: 'string',
      sourceEndpointId: 'string',
      structTransferConfigShrink: 'string',
      transferMappingShrink: 'string',
      type: 'string',
      useOss: 'boolean',
      workerGradeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

