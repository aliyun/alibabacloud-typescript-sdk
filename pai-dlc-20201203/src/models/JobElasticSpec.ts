// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JobElasticSpec extends $dara.Model {
  /**
   * @remarks
   * The AIMaster Docker image.
   */
  AIMasterDockerImage?: string;
  /**
   * @remarks
   * The resource specifications for the AIMaster role.
   * 
   * @example
   * ecs.c6.large
   */
  AIMasterType?: string;
  /**
   * @remarks
   * The maximum EDP parallelism.
   * 
   * @example
   * 16
   */
  EDPMaxParallelism?: number;
  /**
   * @remarks
   * The minimum EDP parallelism.
   * 
   * @example
   * 8
   */
  EDPMinParallelism?: number;
  /**
   * @remarks
   * The elastic training strategy.
   * 
   * @example
   * chief
   */
  elasticStrategy?: string;
  /**
   * @remarks
   * Specifies whether to enable AIMaster.
   */
  enableAIMaster?: boolean;
  /**
   * @remarks
   * Specifies whether to enable EDP.
   * 
   * @example
   * true
   */
  enableEDP?: boolean;
  /**
   * @remarks
   * Specifies whether to enable elastic training.
   * 
   * @example
   * true
   */
  enableElasticTraining?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the elastic PS feature.
   * 
   * @example
   * true
   */
  enablePsJobElasticPS?: boolean;
  /**
   * @remarks
   * Specifies whether to enable elastic workers for PS jobs.
   */
  enablePsJobElasticWorker?: boolean;
  /**
   * @remarks
   * Specifies whether to enable PS resource estimation.
   * 
   * @example
   * true
   */
  enablePsResourceEstimate?: boolean;
  /**
   * @remarks
   * The maximum parallelism.
   * 
   * @example
   * 8
   */
  maxParallelism?: number;
  /**
   * @remarks
   * The minimum parallelism.
   * 
   * @example
   * 1
   */
  minParallelism?: number;
  /**
   * @remarks
   * The maximum PS parallelism.
   * 
   * @example
   * 10
   */
  PSMaxParallelism?: number;
  /**
   * @remarks
   * The minimum PS parallelism.
   * 
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

