// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreviewDataPipelineResponseBodyDatasetsMeta extends $dara.Model {
  /**
   * @remarks
   * The field name.
   * 
   * @example
   * trace_id
   */
  name?: string;
  /**
   * @remarks
   * The field type.
   * 
   * @example
   * string
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewDataPipelineResponseBodyDatasets extends $dara.Model {
  /**
   * @remarks
   * The preview data.
   */
  data?: { [key: string]: any }[];
  /**
   * @remarks
   * The field metadata.
   */
  meta?: PreviewDataPipelineResponseBodyDatasetsMeta[];
  /**
   * @remarks
   * The dataset name.
   * 
   * @example
   * error_spans
   */
  name?: string;
  /**
   * @remarks
   * The number of samples.
   * 
   * @example
   * 1
   */
  sampleCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      meta: 'meta',
      name: 'name',
      sampleCount: 'sampleCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      meta: { 'type': 'array', 'itemType': PreviewDataPipelineResponseBodyDatasetsMeta },
      name: 'string',
      sampleCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(Array.isArray(this.meta)) {
      $dara.Model.validateArray(this.meta);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewDataPipelineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The dataset preview results.
   */
  datasets?: PreviewDataPipelineResponseBodyDatasets[];
  /**
   * @remarks
   * The effective SPL.
   * 
   * @example
   * * | where status_code == "ERROR"
   */
  effectiveScript?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * req-01j2example
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      datasets: 'datasets',
      effectiveScript: 'effectiveScript',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasets: { 'type': 'array', 'itemType': PreviewDataPipelineResponseBodyDatasets },
      effectiveScript: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.datasets)) {
      $dara.Model.validateArray(this.datasets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

