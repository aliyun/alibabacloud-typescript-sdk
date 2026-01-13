// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRecallManagementTableRequest extends $dara.Model {
  enableDataSizeFluctuationThreshold?: boolean;
  enableRowCountFluctuationThreshold?: boolean;
  indexVersionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  maxDataSizeFluctuationThreshold?: number;
  maxRowCountFluctuationThreshold?: number;
  minDataSizeFluctuationThreshold?: number;
  minRowCountFluctuationThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      enableDataSizeFluctuationThreshold: 'EnableDataSizeFluctuationThreshold',
      enableRowCountFluctuationThreshold: 'EnableRowCountFluctuationThreshold',
      indexVersionId: 'IndexVersionId',
      instanceId: 'InstanceId',
      maxDataSizeFluctuationThreshold: 'MaxDataSizeFluctuationThreshold',
      maxRowCountFluctuationThreshold: 'MaxRowCountFluctuationThreshold',
      minDataSizeFluctuationThreshold: 'MinDataSizeFluctuationThreshold',
      minRowCountFluctuationThreshold: 'MinRowCountFluctuationThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableDataSizeFluctuationThreshold: 'boolean',
      enableRowCountFluctuationThreshold: 'boolean',
      indexVersionId: 'string',
      instanceId: 'string',
      maxDataSizeFluctuationThreshold: 'number',
      maxRowCountFluctuationThreshold: 'number',
      minDataSizeFluctuationThreshold: 'number',
      minRowCountFluctuationThreshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

