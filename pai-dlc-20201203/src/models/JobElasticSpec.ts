// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JobElasticSpec extends $dara.Model {
  AIMasterDockerImage?: string;
  AIMasterType?: string;
  /**
   * @example
   * 16
   */
  EDPMaxParallelism?: number;
  /**
   * @example
   * 8
   */
  EDPMinParallelism?: number;
  elasticStrategy?: string;
  enableAIMaster?: boolean;
  /**
   * @example
   * true
   */
  enableEDP?: boolean;
  /**
   * @example
   * true
   */
  enableElasticTraining?: boolean;
  /**
   * @example
   * true
   */
  enablePsJobElasticPS?: boolean;
  enablePsJobElasticWorker?: boolean;
  /**
   * @example
   * true
   */
  enablePsResourceEstimate?: boolean;
  /**
   * @example
   * 8
   */
  maxParallelism?: number;
  /**
   * @example
   * 1
   */
  minParallelism?: number;
  /**
   * @example
   * 10
   */
  PSMaxParallelism?: number;
  /**
   * @example
   * 4
   */
  PSMinParallelism?: number;
  static names(): { [key: string]: string } {
    return {
      AIMasterDockerImage: 'AIMasterDockerImage',
      AIMasterType: 'AIMasterType',
      EDPMaxParallelism: 'EDPMaxParallelism',
      EDPMinParallelism: 'EDPMinParallelism',
      elasticStrategy: 'ElasticStrategy',
      enableAIMaster: 'EnableAIMaster',
      enableEDP: 'EnableEDP',
      enableElasticTraining: 'EnableElasticTraining',
      enablePsJobElasticPS: 'EnablePsJobElasticPS',
      enablePsJobElasticWorker: 'EnablePsJobElasticWorker',
      enablePsResourceEstimate: 'EnablePsResourceEstimate',
      maxParallelism: 'MaxParallelism',
      minParallelism: 'MinParallelism',
      PSMaxParallelism: 'PSMaxParallelism',
      PSMinParallelism: 'PSMinParallelism',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIMasterDockerImage: 'string',
      AIMasterType: 'string',
      EDPMaxParallelism: 'number',
      EDPMinParallelism: 'number',
      elasticStrategy: 'string',
      enableAIMaster: 'boolean',
      enableEDP: 'boolean',
      enableElasticTraining: 'boolean',
      enablePsJobElasticPS: 'boolean',
      enablePsJobElasticWorker: 'boolean',
      enablePsResourceEstimate: 'boolean',
      maxParallelism: 'number',
      minParallelism: 'number',
      PSMaxParallelism: 'number',
      PSMinParallelism: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

