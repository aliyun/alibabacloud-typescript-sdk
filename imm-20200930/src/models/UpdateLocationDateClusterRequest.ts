// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLocationDateClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The custom ID of the cluster. When the cluster is indexed into the dataset, the custom ID is stored as the data attribute. You can map the custom ID to other data in your business system. For example, you can pass the custom ID to map a URI to an ID. We recommend that you specify a globally unique value. The value can be up to 1,024 bytes in size.
   * 
   * @example
   * member-id-0001
   */
  customId?: string;
  /**
   * @remarks
   * The custom labels. The parameter stores custom key-value labels, which can be used to filter data. You can specify up to 100 custom labels for a cluster.
   * 
   * @example
   * {
   *       "UserScore": "5"
   * }
   */
  customLabels?: { [key: string]: any };
  /**
   * @remarks
   * The name of the dataset.[](~~478160~~)
   * 
   * This parameter is required.
   * 
   * @example
   * test-dataset
   */
  datasetName?: string;
  /**
   * @remarks
   * The ID of the cluster that you want to update.
   * 
   * This parameter is required.
   * 
   * @example
   * location-date-cluster-71dd4f32-9597-4085-a2ab-3a7b0fd0aff9
   */
  objectId?: string;
  /**
   * @remarks
   * The name of the project.[](~~478153~~)
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * The name of the cluster. The name can be used to search for the cluster. The value can be up to 1,024 bytes in size.
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      customId: 'CustomId',
      customLabels: 'CustomLabels',
      datasetName: 'DatasetName',
      objectId: 'ObjectId',
      projectName: 'ProjectName',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customId: 'string',
      customLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      datasetName: 'string',
      objectId: 'string',
      projectName: 'string',
      title: 'string',
    };
  }

  validate() {
    if(this.customLabels) {
      $dara.Model.validateMap(this.customLabels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

