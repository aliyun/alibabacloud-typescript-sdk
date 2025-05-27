// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateEventStreamingRequestSinkSinkCustomizedKafkaConnectorParametersConnectorParameters } from "./CreateEventStreamingRequestSinkSinkCustomizedKafkaConnectorParametersConnectorParameters";


export class CreateEventStreamingRequestSinkSinkCustomizedKafkaConnectorParameters extends $dara.Model {
  connectorPackageUrl?: string;
  connectorParameters?: CreateEventStreamingRequestSinkSinkCustomizedKafkaConnectorParametersConnectorParameters;
  workerParameters?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      connectorPackageUrl: 'ConnectorPackageUrl',
      connectorParameters: 'ConnectorParameters',
      workerParameters: 'WorkerParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectorPackageUrl: 'string',
      connectorParameters: CreateEventStreamingRequestSinkSinkCustomizedKafkaConnectorParametersConnectorParameters,
      workerParameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.connectorParameters && typeof (this.connectorParameters as any).validate === 'function') {
      (this.connectorParameters as any).validate();
    }
    if(this.workerParameters) {
      $dara.Model.validateMap(this.workerParameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

